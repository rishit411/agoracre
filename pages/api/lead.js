export default async function handler(req,res){
  if(req.method==="POST"){
    try{
      const { name, email, company } = req.body || {};
      console.log("Lead (JSON):", {name,email,company});
      return res.status(200).json({ok:true});
    }catch(e){ console.error(e); return res.status(500).json({ok:false}); }
  } else if (req.method==="GET"){
    console.log("Lead (form):", req.query);
    return res.status(200).json({ok:true});
  } else {
    return res.status(405).json({ok:false});
  }
}
