import fs from "fs";

let fileName = "user_info.txt"
let info = "Bob Bobski is the best student in the school"
fs.writeFileSync(fileName, info);
