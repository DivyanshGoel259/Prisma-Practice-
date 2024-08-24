import {  PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['info','query']})

async function main(){
    await prisma.user.create({
        data:{
            email:"harki2rat@gmail.com",
            name:"divyansh"
        }
    })
}
main().then(async ()=>{
    console.log("done with the query")
    await prisma.$disconnect()
})
.catch(async (e)=>{
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
})