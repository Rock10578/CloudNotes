export function getAllNotes(req,res){
    res.status(200).send("You Just fetched all Notes");
}

export function createNote(req,res){
    res.status(201).json({message : "Note created Successfully!"});
}

export function updateNote(req,res){
    res.status(200).json({ message : `Note with id ${req.params.id} Updated Successfully!`});
}

export function deleteNote(req,res){
    res.status(200).json({ message : `Note with id ${req.params.id} Deleted Successfully!`});
}