import { json } from "express";
import fetch from "node-fetch";

const base_url = process.env.JSON_SERVER_Full_URL;
console.log(base_url)

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export async function get_all_todos() {
  try {
    const response = await fetch(base_url + "/todos");
    return await response.json();
  } catch (err) {
    console.log(err);
    return JSON.stringify(err);
  }
}

export async function get_todo(id) {
  try {
    const response = await fetch(base_url + "/todos/" + id);
    return await response.json();
  } catch (err) {
    console.log(err);
    return JSON.stringify(err);
  }
}

export async function add_todo(todo) {
  const id = makeid(12);
  const response = await fetch(base_url + "/todos", {
    method: "POST",
    body: JSON.stringify({
      id: id,
      todo,
      created_at: Date.now(),
      updated_at: Date.now(),
    }),
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}

export async function update_todo(id, new_todo) {
  const response = await fetch(base_url + "/todos/" + id, {
    method: "PATCH",
    body: JSON.stringify({
      todo: new_todo,
      updated_at: Date.now(),
    }),
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}

export async function delete_todo(id) {
  const response = await fetch(base_url + "/todos/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}
