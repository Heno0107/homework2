import style from './section.module.css'

function Section ({products}) {
    return (
        <div className={style.container}>
            <section>
            <ul>
                {
                    products.map((prod) => {
                        return <li>
                            <div className={style.imgDiv}>
                                <img src = {prod.image}/>
                            </div>
                            
                            <div className={style.desDiv}>
                                <h2>{prod.title}</h2>
                                <p>{prod.description}</p>
                                <p>{prod.price}$</p>
                                <a href="#">{prod.category}</a>
                            </div>

                            </li>
                    })
                }
            </ul>
        </section>
        </div>
        
    )
}

export default Section