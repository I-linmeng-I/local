import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"
import * as SupabaseSupabaseJs from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0";

const supabaseUrl = 'https://eggtdvvjoksncmdbxgsz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnZ3RkdnZqb2tzbmNtZGJ4Z3N6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxNjE4MDgsImV4cCI6MTk5MzczNzgwOH0.1PNSCvjCrAqMEUPXpPX6qwZCqTRexjWZuhIzSZeorK0'
const supabase = createClient(supabaseUrl, supabaseKey)

 
let { data: testList, error } = await supabase.from('testList').select('*')

const tableBody = document.querySelector('tbody')

testList.forEach(book => {
  const row = document.createElement('tr')
  row.className = 'item'
  const idCell = document.createElement('td')
  const titleCell = document.createElement('td')
  const authorCell = document.createElement('td')
  const isbnCell = document.createElement('td')
  const description = document.createElement('td')

  idCell.textContent = book.id
  titleCell.textContent = book.title
  authorCell.textContent = book.author
  isbnCell.textContent = book.isbn
  description.textContent = book.description

  row.appendChild(idCell)
  row.appendChild(titleCell)
  row.appendChild(authorCell)
  row.appendChild(isbnCell)
  row.appendChild(description)

  tableBody.appendChild(row)
})