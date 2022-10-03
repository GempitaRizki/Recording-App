import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from './components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src='https://www.xtrafondos.com/wallpapers/vertical/el-rayo-de-thor-7655.jpg' alt='' />
      
      <div className="user">
        <img src="https://i.pinimg.com/564x/4f/f0/f2/4ff0f20c8bc609524f1ea3d00c9fca39.jpg" alt="" />

      <div className="info">
        <span>GempitaRizki</span>    
        <p>Posted 999 days ago</p>
          </div>
      <div className="edit">
      <Link to={`/write?edit=2`}>
      <img src={Edit} alt="" />
      </Link>
      <img src={Delete} alt="" />
      </div>
    </div>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ex?</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem cupiditate eos velit, at nostrum officiis similique suscipit in. Totam a commodi ex. In, porro, non modi praesentium eaque iure accusamus laudantium ut officia quia quibusdam ex, incidunt laboriosam ipsum distinctio reprehenderit officiis doloremque recusandae sequi magnam! Recusandae, quaerat saepe repellat in quo, nihil vitae ullam nemo inventore dignissimos magni consequatur quos vero eligendi ab fugiat itaque expedita laudantium modi facere fugit. Debitis repellat sequi molestiae, praesentium accusantium autem cum expedita rerum amet, maxime odio eos doloribus nostrum laborum, placeat quisquam distinctio modi minus aspernatur delectus. Dignissimos soluta asperiores nam dolore perferendis laboriosam quaerat ex quis tempora, tenetur quae numquam ipsum voluptatibus repellendus! Omnis cupiditate architecto eligendi cum hic corporis eum?</p>
   <br></br>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae tenetur est commodi accusantium, reprehenderit, tempore nobis iure officiis sit atque, dignissimos velit a itaque pariatur ipsa repellat id doloremque expedita deserunt. Dignissimos, aliquam culpa, accusantium asperiores, ratione sed ipsa dolorum laborum repellat enim consequatur. Doloribus, commodi provident. Ad, cumque eum!</p>
    <br></br>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veniam, non accusantium ea necessitatibus dolorem veritatis quaerat corporis voluptatem molestias temporibus dolores officia eos aut nobis rem, reprehenderit accusamus. Qui iure totam aspernatur consequatur asperiores adipisci perferendis, ullam voluptatem vero perspiciatis numquam voluptatibus esse nulla! Minus odio suscipit accusamus sapiente provident, est quisquam perspiciatis dignissimos fuga laboriosam tenetur optio numquam neque soluta illum reiciendis nostrum animi dolorem, repellendus, sint debitis possimus? Neque magnam rem magni incidunt consectetur sequi a aut!</p>
      </div>
      < Menu />
    </div>
  )
}

export default Single