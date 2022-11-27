import * as abcMod from 'https://deno.land/x/abc/mod.ts'
import{ get_all_books,get_book,delete_book,create_book} from './Controllers/bookController.ts'
const app = new abcMod.Application();

// static files
app.static('/','./public');

//rountes
app.get('/',async (ctx: abcMod.Context) =>{
    await ctx.file('./public/index.html')
    console.log('request made')
});

// app.get('/books',(ctx:abcMod.Context) =>{
//     console.log('all books')
//     ctx.json([{title:'blah'},{title:'blah blah'}])
//     //ctx.string('all books');
// } )
// .get('/books/:id', ()=>{} 
// ).post('/books',()=>{})
// .delete('/books/:id',()=>{

// })

app.get('/books',get_all_books )
.get('/books/:id', get_book 
).post('/books',create_book)
.delete('/books/delete/:id',delete_book)

//Listen to port
app.start({port:3000});
