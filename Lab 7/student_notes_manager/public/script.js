const api = "http://localhost:3000/notes";


function addNote(){

    const note = {
        title: document.getElementById("title").value,
        subject: document.getElementById("subject").value,
        description: document.getElementById("description").value
    };

    fetch(api,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(note)
    })
    .then(res=>res.json())
    .then(()=>{
        loadNotes();
    });

}


function loadNotes(){

    fetch(api)
    .then(res=>res.json())
    .then(data=>{

        let html="";

        data.forEach(note=>{

            html += `
            <div class="note">

            <h3>${note.title}</h3>
            <p><b>Subject:</b> ${note.subject}</p>
            <p>${note.description}</p>

            <button onclick="deleteNote('${note._id}')">Delete</button>

            <button onclick="editNote('${note._id}','${note.title}','${note.description}')">Edit</button>

            </div>
            `;
        });

        document.getElementById("notesContainer").innerHTML = html;

    });

}


function deleteNote(id){

    fetch(api+"/"+id,{
        method:"DELETE"
    })
    .then(()=>{
        loadNotes();
    });

}


function editNote(id,title,description){

    const newTitle = prompt("Edit Title",title);
    const newDesc = prompt("Edit Description",description);

    fetch(api+"/"+id,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title:newTitle,
            description:newDesc
        })
    })
    .then(()=>{
        loadNotes();
    });

}


loadNotes();