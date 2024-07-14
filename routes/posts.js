import express from 'express';

const router=express.Router();

let posts=[
    {id:1, title:"Post One"},
    {id:2, title:"Post Two"},
    {id:3, title:"Post Three"}
];
//get posts by id
router.get('/:id',(req,res)=>{
  res.json(posts);
  })

router.get('/',(req,res)=>{
res.json(posts);
})

//create new posts

router.get('/',(req,res)=>{
    console.log(req.body);

    res.status(201).json(posts);
})

router.put('/',(req,res)=>{
    const id=parseInt(req.params.id);
    const post=posts.find((posts)=>post.id===id);
    if(!post){
        return res.status(404).json({message:'No id found'})
    }
})

router.delete('/',(req,res)=>{
    const id=parseInt(req.params.id);
    const post=posts.find((posts)=>post.id===id);
    if(!post){
        return res.status(404).json({message:'No id found'})
    }
    posts=posts.filter((post)=>post.id!==id)
    return res.status(200).json(posts);
})


export default router;


