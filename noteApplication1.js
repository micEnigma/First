// Create NotesApplication Class

function NotesApplication(author){
	this.author = author;
	this.notes = [];
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
};

// Method for retrieving content by note_id

NotesApplication.prototype.get = function(note_id){
	return this.notes[note_id];
};


// Method for searching content in NotesApplication Class Objects

NotesApplication.prototype.search = function(search_text){
	a= []
	for(i=0; i<this.notes.length; i++){
		for(j=0; j<this.notes[i].length; j++){
			if(this.notes[i].substring(j,j+search_text.length) === search_text){
				console.log("Showing results for search " + search_text);
				console.log(this.notes[i]);
				a.push(i);
			
			};
		};
	};
	if(a.length === 0){
		console.log("Text "+ search_text+" not found, please try another text or author.")
	};
};

// Method for deleting content in NotesApplication Class Objects

NotesApplication.prototype.delete = function(note_id){
	delete this.notes[note_id]
};

// Method for updating content by id in NotesApplication Class Objects

NotesApplication.prototype.edit = function(note_id, new_content){
	this.notes[note_id]= new_content;
};





// Test code

var bob = new NotesApplication("Bobby")
var testText = ["ffhffjfjhrasjkbzdf", 12456, "gdghfhdsrtyuj", this.author]
for(i=0; i<testText.length; i++){
	bob.create(testText[i]);
}
