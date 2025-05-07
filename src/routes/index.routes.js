import { Router } from "express"

const router = Router()

router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/about', (req, res)=>{
    res.render('about')
})

router.get('/booking', (req, res)=>{
    res.render('booking')
})

router.get('/contact', (req, res)=>{
    res.render('about')
})

router.get('/destination', (req, res)=>{
    res.render('destination')
})

router.get('/package', (req, res)=>{
    res.render('package')
})

router.get('/service', (req, res)=>{
    res.render('service')
})

router.get('/team', (req, res)=>{
    res.render('team')
})

router.get('/testimonial', (req, res)=>{
    res.render('testimonial')
})

router.get('/about', (req, res)=>{
    res.render('contact')
})

router.use((req, res)=>{
    res.status(400).render('404')
})
export default router