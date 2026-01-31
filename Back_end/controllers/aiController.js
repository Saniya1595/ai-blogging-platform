
const OpenAI=require("openai");
const openai=new OpenAI({apiKey:process.env.OPENAI_KEY});
exports.generateBlog=async(req,res)=>{
 const g=await openai.chat.completions.create({
  model:"gpt-4o-mini",
  messages:[{role:"user",content:req.body.prompt}]
 });
 res.json({text:g.choices[0].message.content});
};
