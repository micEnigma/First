//Test code

describe("Should test OOP code of noteApplication1.js", function() {
	var bob = new NotesApplication("Bobby");
	var num = new NotesApplication(1234);

	it("Should check NoteApplication Class can create objects", function() {
		expect(bob.author).toBe("Bobby");
		expect(num.author).toBe(1234);

	});


	it("Should check that argument entered is a string", function() {
		expect(typeof bob.author).toBe("string");
		expect(typeof num.author).toBe("number");

	});


	it("Should check that notes are empty at instantiation", function(){
		expect(bob.notes.length).toBe(0);

	});

});


describe("Should test create method of NotesApplication", function(){
	bob.create("Test text for testing if texting is contesting in the right context");
	bob.create(12345);

	it("Should check that note content can only accept strings", function(){
		expect(typeof bob.notes[0]).toBe("string");
		expect(typeof bob.notes[1]).toBe("undefined");
		
	});


	it("Should check that note content entered is accepted correctly", function(){
		
		expect(bob.notes[0]).toBe("Test text for testing if texting is contesting in the right context");
	});

	
});


describe("Should test listNotes method of NotesApplication", function(){
	

	it("Should check that all notes the Author have been listed", function(){
		bob.create("Nonsense test text just for testing texting content is in the context");
		expect(bob.listNotes()).toBe("Number of notes by Bobby listed above: 2");
				
	});

});


describe("Should test method for retrieving notes by id", function(){
	

	it("Should check that the correct note is retrieved when an id is passed in", function(){
		
		expect(bob.get(0)).toBe("Test text for testing if texting is contesting in the right context");
		expect(bob.get(1)).toBe("Nonsense test text just for testing texting content is in the context");
				
	});

});


describe("Should test method for deleting notes by id", function(){
	

	it("Should check that the correct note is deleted when an id is passed in", function(){
		bob.delete(0)
		expect(bob.get(0)).toBe();
		expect(typeof bob.notes[0]).toBe("undefined");
		expect(bob.notes[1]).toBe("Nonsense test text just for testing texting content is in the context")
						
	});

});


describe("Should test method for editing notes by id", function(){
	

	it("Should check that the correct note is updated when an id is passed in", function(){
		bob.edit(0, "new lajflojojfaofjpojfljf")
		expect(bob.get(0)).toBe("");
		expect(typeof bob.notes[0]).toBe("undefined");
		expect(bob.notes[1]).toBe("Nonsense test text just for testing texting content is in the context")
						
	});

});