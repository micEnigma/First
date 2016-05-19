// Create NotesApplication Class

function NotesApplication(author){
	if(typeof author === "string"){
	this.author = author;
	this.notes = [];
	}
	else{
		return "That can't be an author, please try a text string"
	};
}

// Method for adding note_content to NotesApplication Class Objects

NotesApplication.prototype.create = function(note_content){
	if(typeof note_content === "string"){
		this.notes.push(note_content);
	}
	else{
		console.log(note_content + " not added...please type text")
	};
};

// Method for listing content in NotesApplication Class Objects

NotesApplication.prototype.listNotes = function(){
	for (i=0; i<this.notes.length; i++){
		console.log("Note ID: " + i);
		console.log(this.notes[i]);
		console.log("By Author "+ this.author);
	};
	return "Number of notes by " + this.author + " listed above: " + this.notes.length;
};

// Method for retrieving content by note_id

NotesApplication.prototype.get = function(note_id){
	return this.notes[note_id];
};


// Method for searching content in NotesApplication Class Objects

NotesApplication.prototype.search = function(search_text){
	var a= []
	for(i=0; i<this.notes.length; i++){
		for(j=0; j<this.notes[i].length; j++){
			if(this.notes[i].substring(j,j+search_text.length) === search_text){
				console.log("Showing results for search " + search_text);
				console.log(this.notes[i]);
				a.push(i);
			
			};
		};
	};
	return "Text "+ search_text+" found " + a.length + " times in " +this.author +"'s notes";
};


// Method for deleting content in NotesApplication Class Objects

NotesApplication.prototype.delete = function(note_id){
	delete this.notes[note_id]
};

// Method for updating content by id in NotesApplication Class Objects

NotesApplication.prototype.edit = function(note_id, new_content){
	if(typeof new_content === "string"){
		this.notes[note_id]= new_content;
	}
	else{
		return "invalid content entered, no updates will be made"
	}
};