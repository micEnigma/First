
//Test code

describe("Should test OOP code of noteApplication1.js", function() {
  var bob = new NotesApplication("Bobby")
  var num = new NotesApplication(1234)

  it("Should check NoteApplication Class can create objects", function() {

    expect(bob.author).toBe("Bobby");
    expect(num.author).toBe(1234);
  });

  it("Should check that argument entered is a string", function() {

    expect(typeof bob.author).toBe("string");
    expect(typeof num.author).toBe("number");
  });

  it("Should check that notes are empty at instantiation", function(){

  	expect(bob.notes.length).toBe([]);
  });
});

describe("Should test create method of NotesApplication", function(){

	bob.create("Test text for testing if texting is contesting in the right context")

	it("Should check that note content entered is a string", function(){

	//	expect(typeof bob.notes).toBe("string");
	//	expect(bob.notes).toBe("Test text for testing if texting is contesting in the right context");
	});

});