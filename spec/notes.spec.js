describe('notes module', function(){
    //var n = new notes();
    var n = window.app.notes;

    beforeEach(function(){
        n.clear();
        n.add('first');
        n.add('second');
        n.add('third');
        n.add('fourth');
        n.add('fifth');
    });

    it('Should be able to add a new note', function(){
        expect(n.add('sixth')).toBe(true);
        expect(n.count()).toBe(6);
        console.log('lisäys onnistui');
    });

   it('should ignore blank notes', function(){
    expect(n.add('')).toBe(false);
    expect(n.count()).toBe(5);
    });

    it('should ignore notes containing only whitespace', function() {
    expect(n.add('   ')).toBe(false);
    expect(n.count()).toBe(5);
    //pending();
    });

    it('should require a string parameter', function() {
    expect(n.add()).toBe(false);
    expect(n.count()).toBe(5);
    //pending();
    });

    describe('deleting a note', function() {

        it('should be able to delete the first index', function() {
        expect(n.remove(0)).toBe(true);
        expect(n.count()).toBe(4);
        //pending();
    });

        it('should be able to delete the last index', function() {
        expect(n.remove(4)).toBe(true);
        expect(n.count()).toBe(4);
        //pending();
        });

        it('should return false if index is out of range', function() {
        expect(n.remove(8)).toBe(false);
        expect(n.count()).toBe(5);
        //pending();
        });

        it('should return false if the parameter is missing', function() {
        expect(n.remove()).toBe(false);
        expect(n.count()).toBe(5);
        //pending();
        });
    });
    
   describe('finding notes', function() {
            it('should be able to find a note by name', function() {
               expect(n.find('first')[0].Text).toBe('first');
               expect(n.find('fifth')[0].Text).toBe('fifth');
                expect(n.find('third')[0].Text).toBe('third');
            });

            it('should return a list of three note objects', function() {
                n.add('test');
                n.add('test');
                n.add('test');
                expect(n.find('test').length).toBe(3);
            });

            it('should return false if parameter is missing', function() {
               expect(n.find()).toBe(false);
           });

           it('should return false if parameter is given a blank string', function() {
                expect(n.find('')).toBe(false);
            });

           it('should return false if there will be no match with given parameter', function() {
                expect(n.find('IDoNotExist')).toBe(false);
            });
        });
});