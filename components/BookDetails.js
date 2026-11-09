// solution
app.component('book-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `
      <h2>Books List template</h2>
      <div>       
        <ul>
          <li v-for="book in details" :key="book.id">
            {{ book.title }} by {{ book.author }} ({{ book.published }})
          </li>
        </ul> 
      </div>
  `
})
// solution