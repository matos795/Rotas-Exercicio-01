import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import TextField from "../../../components/TextField";


export default function Inscricao() {
    return(
        <>
            <main>
                <TextField text="Página de inscrição" />
                <Link to='/promocao'>
                    <Button text="Ver promoção" />
                </Link>
            </main>
        </>
    );
}