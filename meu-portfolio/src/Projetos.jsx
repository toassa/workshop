function Projetos(){
    return(
        <section id="projetos">
            <h2>Meus Projetos</h2>
            <div className="projetos-grid">
                <div className="projeto-card">
                    <img src="https://blog.geekhunter.com.br/wp-content/uploads/2024/12/chris-ried-ieic5Tq8YMk-unsplash-scaled.jpg" alt="Projeto 1" />
                    <h3>Projeto 1</h3>
                    <p>Descrição do projeto 1</p>
                </div>
                <div className="projeto-card">
                    <img src="https://www.targethost.com.br/wp-content/uploads/2019/10/programa%C3%A7%C3%A3o_1504275918.jpg" alt="Projeto 2" />
                    <h3>Projeto 2</h3>
                    <p>Descrição do projeto 2</p>
                </div>
                <div className="projeto-card">
                    <img src="https://www.univates.br/blog//wp-content/uploads/2024/07/Imagens-posts-blog-47-1920x1280.jpg" alt="Projeto 3" />
                    <h3>Projeto 3</h3>
                    <p>Descrição do projeto 3</p>
                </div>
            </div>
        </section>
    );
}

export default Projetos;