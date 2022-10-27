import { useState } from "react";
import { Header } from "../Header/Header";
import { Homepage } from "../Homepage/Homepage";
import { PageMatchs } from "../PageMathcs/PageMatchs";

export function SeletorPagina(){
    const [selectPage, setSelectPage] = useState("HomePage")
    // funcão para escolher pagina
    const pageSelect = () =>{

        switch (selectPage){
            case "Homepage":
                return <Homepage/>;
            case "PageMatchs":
                return <PageMatchs/>;
            default:
                return <Homepage/>;
        }
    };
    // atualiza o estado para homepage
    const irParaHomepage = () =>{setSelectPage("Homepage")}
    // atualiza o estado para pagina de matchs
    const irParaMathchs = () =>{setSelectPage("PageMatchs")}

    return(
        <>
            <Header
                irParaHomepage={irParaHomepage}
                irParaMathchs={irParaMathchs}
            />
            {pageSelect()}
        </>
    )
}