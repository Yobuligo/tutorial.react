/**
 * It is possible to find elements by its label text and regex
 * 
 * component contains
 * <label htmlFor="email">Enter Email</label>
 * <input id="email"/>
 * 
 * 
 * screen.getByRole("textbox", { name: /enter email/i})
 */