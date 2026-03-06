// Supabase configuration
const SUPABASE_URL = "https://YOUR_PROJECT_ID.supabase.co"
const SUPABASE_KEY = "YOUR_PUBLIC_ANON_KEY"

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

const form = document.getElementById("expenseForm")
const list = document.getElementById("expenseList")

let currentUser = null

// Example login (simple demo)
async function login(){

const username = prompt("Enter username")

let { data } = await supabase
.from("users")
.select("*")
.eq("username", username)
.single()

if(!data){

let result = await supabase
.from("users")
.insert([{ username }])
.select()
.single()

currentUser = result.data

}else{
currentUser = data
}

loadExpenses()

}

login()
