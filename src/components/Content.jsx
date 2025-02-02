import React from 'react'
import "../styles/content.css"

const Content = () => {
  return (
    <section className='content-section'>
        <div className="title-container">
            <h1 className='main-title'>Передвиборча програма  кандидата на пост <br /> директора інституту ІКНІ <br /> Наталії Шаховської </h1>
            <button className="btn-download"><a className="link-download" href="/ProektProhramy.docx.pdf" download="Передвиборча програма.pdf">Завантажити програму</a></button>
        </div>
        <div className="txt-container">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis provident dolor doloremque quibusdam nisi accusantium tempora animi ad fugiat voluptates, amet aperiam cupiditate asperiores commodi quidem quo laboriosam rerum eligendi hic dolore facilis minima a expedita quasi. Fugit voluptatem cupiditate tempora! Sit cumque expedita veritatis doloribus deleniti distinctio, perspiciatis, libero voluptas temporibus provident accusantium quia est sunt perferendis corrupti aspernatur delectus alias? Nisi blanditiis quas id nulla aliquid corrupti cumque minus ducimus excepturi rem nostrum sed facilis suscipit voluptatem corporis veritatis ab inventore dolore magni quam.
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;Placeat aperiam mollitia. Facere aperiam necessitatibus porro nihil quibusdam similique totam temporibus animi. Ex aliquam magnam porro odio quis nulla, quisquam consequuntur molestiae. Minus placeat necessitatibus maiores cumque in facere maxime, laudantium atque cum quod voluptatem, excepturi at! Vero sequi maxime voluptatum modi voluptatibus, optio officia eligendi quos debitis molestias dolor sed nobis cumque iure non, corporis numquam officiis tempora amet, est tenetur eum. Quos numquam possimus blanditiis dolore, at facere ab nostrum explicabo deserunt qui.
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;Quidem laborum dignissimos iusto mollitia cum! Quasi natus architecto unde odit a magnam, nobis, vero illum cumque sed, accusamus delectus autem. Doloribus nulla, assumenda, nostrum voluptates debitis libero perferendis eligendi est nam voluptatibus repellendus error, ad id quia corporis. Harum minima optio blanditiis doloremque, fugiat dolor atque voluptates possimus ex deleniti ipsum odio id vitae quis aperiam rem enim fugit cumque excepturi! Dolor, repellat debitis. Laudantium soluta, autem corrupti ipsa velit neque, saepe molestias ut quia commodi fugit esse quasi mollitia libero error. 
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;Perferendis odit harum officia doloremque consequatur eligendi excepturi aperiam corrupti quis quia debitis temporibus nihil ex dignissimos, numquam laboriosam maiores, facere repudiandae soluta, minima quidem. Assumenda laboriosam reiciendis commodi inventore nam obcaecati doloremque dolores. Consequatur dolorum, tempore perferendis ducimus quos sunt illum repellat amet doloribus debitis nobis velit laboriosam assumenda iste itaque libero porro totam quod odit commodi minima. Expedita rem voluptatem corrupti sit, quis porro veritatis error dolor. Animi, maxime ipsa, officiis consequuntur illo numquam iste excepturi sapiente fuga unde repudiandae aliquid consequatur accusantium omnis eaque aspernatur id dolore! 
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;Ipsum praesentium, quod tempora odit officiis doloribus aut amet id ut odio vitae sit qui. Voluptate veniam voluptates perferendis eligendi reprehenderit natus magnam sit quae numquam vel consectetur minima quaerat quasi architecto quo exercitationem aperiam optio cupiditate, aspernatur, ratione sunt adipisci dolor dicta cumque! Cupiditate placeat ipsam aperiam pariatur eius dolorum harum quasi ipsum rem. 
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;Repudiandae sunt similique dolor amet velit quibusdam eveniet animi tempore distinctio excepturi quia officiis consectetur expedita saepe, ex facere temporibus nulla sapiente ullam maxime. Doloremque cum natus nesciunt? 
            </p>
        </div>
        <button 
          className="btn-download"
          onClick={() => window.location.href = "mailto:nataliiashakhovska@gmail.com?subject=Запитання&body=Доброго дня, Наталіє! У мене є питання..."}
        >
          Поставити запитання
        </button>
    </section>
  )
}

export default Content
