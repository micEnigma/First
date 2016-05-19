//Test code

describe("Should test OOP code of noteApplication1.js", function() {
	var bob = new NotesApplication("Bobby");
	var num = new NotesApplication(1234);

	it("Passed check that NoteApplication Class can create objects ", function() {
		expect(bob.author).toBe("Bobby");
		
	});

	
	it("Passed 3 checks that Objects will only be created when argument entered is a string", function() {
		expect(typeof bob.author).toBe("string");
		expect(typeof num.author).toBe("undefined");
		expect(num.author).toBe();

	});


	it("Passed check that notes are empty at instantiation", function(){
		expect(bob.notes.length).toBe(0);

	});

});


describe("Should test create method of NotesApplication", function(){
	var sue = new NotesApplication("Susan");
	var num = new NotesApplication(1234);
	sue.create("Test text for testing if texting is contesting in the right context");
	sue.create(12345);

	it("Passed 2 checks that note content can only be accepted as strings", function(){
		expect(typeof sue.notes[0]).toBe("string");
		expect(typeof sue.notes[1]).toBe("undefined");
		
	});


	it("Passed check that note content entered is accepted correctly", function(){
		
		expect(sue.notes[0]).toBe("Test text for testing if texting is contesting in the right context");
	});

	
});


describe("Should test listNotes method of NotesApplication", function(){
	var me = new NotesApplication("Musan");
	
	me.create("Test text for testing if texting is contesting in the right context");

	it("Passed check that all notes the Author have been listed", function(){
		me.create("Nonsense test text just for testing texting content is in the context");
		expect(me.listNotes()).toBe("Number of notes by Musan listed above: 2");
				
	});

});


describe("Should test method for retrieving notes by id", function(){
	var bob = new NotesApplication("Musan");
	bob.create("Test text for testing if texting is contesting in the right context");
	bob.create("Nonsense test text just for testing texting content is in the context");

	it("Passed 2 checks that the correct note is retrieved when an id is passed in", function(){
		
		expect(bob.get(0)).toBe("Test text for testing if texting is contesting in the right context");
		expect(bob.get(1)).toBe("Nonsense test text just for testing texting content is in the context");
				
	});

});


describe("Should test method for deleting notes by id", function(){
	var bob = new NotesApplication("Musan");
	bob.create("Test text for testing if texting is contesting in the right context");
	bob.create("Nonsense test text just for testing texting content is in the context");

	it("Passed 3 checks that the correct note is deleted when an id is passed in", function(){
		bob.delete(0)
		expect(bob.get(0)).toBe();
		expect(typeof bob.notes[0]).toBe("undefined");
		expect(bob.notes[1]).toBe("Nonsense test text just for testing texting content is in the context")
						
	});

});


describe("Should test method for editing notes by id", function(){
	var bob = new NotesApplication("Musan");
	bob.create("Test text for testing if texting is contesting in the right context");
	bob.create("Nonsense test text just for testing texting content is in the context");

	it("Passed 5 checks that the correct note is updated when an id is passed in", function(){
				
		expect(bob.edit(1, 45678)).toBe("invalid content entered, no updates will be made")

		bob.edit(0, "new rubbish text lajflojojfaofjpojfljf")

		expect(bob.get(0)).toBe("new rubbish text lajflojojfaofjpojfljf");
		expect(bob.get(1)).toBe("Nonsense test text just for testing texting content is in the context");
		expect(typeof bob.notes[1]).toBe("string");
		expect(bob.notes[1]).toBe("Nonsense test text just for testing texting content is in the context")
						
	});

});


describe("Should test search method of NotesApplication", function(){
	var men = new NotesApplication("Musa");	
	men.create("Test text for testing if texting is contesting in the right context");
	men.create("Nonsense test text just for testing texting content is in the context");
	men.create("new rubbish text lajflojojfaofjpojfljf");

	it("Passed 3 checks that search method works", function(){
		
		expect(men.search("wrong")).toBe("Text wrong found 0 times in Musa's notes");
		expect(men.search("new")).toBe("Text new found 1 times in Musa's notes");
		expect(men.search("text")).toBe("Text text found 7 times in Musa's notes");
				
	});

});