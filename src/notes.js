(function (window) {

var notes = (function (){
    var stored_notes = [];

    return{
        add:function(note){
        console.log('tarkistetaan note');
        if((!typeof value === "string") || note == undefined){
            console.log('ei kelpaa');
            return false;
        }else{
            if(note.length<=0 || !/\S/.test(note)){
                console.log('note is empty');
                return false;
            }
            console.log('lisätään note');      
            var toBeSavedNote = {Time:Math.floor(Date.now() / 1000),Text: note};            stored_notes.push(toBeSavedNote);
            console.log('Note ' + toBeSavedNote.Text + ' lisätty ajassa ' + toBeSavedNote.Time);
            return true;
        }
        },

        remove:function(index){
            if (typeof stored_notes[index] === 'string' || stored_notes[index] instanceof String){
                console.log('element is a string not an object');
                return false;
            }else{
                try{
                     console.log('poistetaan note ' + stored_notes[index].Text);
                    stored_notes.splice(index,1);               
                    return true;
                }catch(err){
    console.log('index is out of bounds or missing');
                  return false;
                }   
            }
        },

        count:function(){
            return stored_notes.length;
        },

        list:function(){
            return stored_notes;
        },

        find:function(search){
            if(search === undefined || search.length<=0 || !/\S/.test(search)){
                console.log('empty parameter');
                return false;
            }
            var results_list = [];
            var i = 0;
            stored_notes.forEach(function(listCell){
                if(search === listCell.Text){
                    console.log('match : ' + search + ' ' + listCell.Text);
                    results_list.push(listCell);
                    i++;   
                };
            });

            console.log(results_list.length);

            if(results_list.length>0){
                return results_list;
            }else{
                console.log('There was no match');
                return false;
            }
        },

        clear:function(clear){
            stored_notes = [];
        }
        };
}());

//var Notes = new notes();

window.app = window.app || {};
window.app.notes = notes;
})(window);