import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.post.create({
        data:{
            title:"Nothing",
            content:"kuch anhi",
            published:true,
            author:{
                connect:{
                    id:1
                }
            }
        }
    })
}
main().then(async ()=>{
    console.log("query done")
    await prisma.$disconnect()
}).catch(async (e)=>{
    console.log(e)
    prisma.$disconnect()
    process.exit(1)
})
