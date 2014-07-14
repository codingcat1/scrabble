describe('scrabble', function(){
  it("when a letter is entered, the Scrabble score of the letter is returned", function(){
    scrabble("a").should.eql(1);
  });
  it("when multiple letters are entered, the Scrabble score of the multiple letters is returned", function(){
    scrabble("wxyz").should.eql(26);
  });
  it("when a word is entered with both Uppercase & lowercase letters, the correct scrabble score of all letters are returned", function(){
    scrabble("HaT").should.eql(6);
  });

});

