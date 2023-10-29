import {ProgressBar} from"react-bootstrap";
//props y tipo de dato q puede recibir el componente hijo

type DangerBarProps={
    value: number;
};

const DangerBar= ({value}:DangerBarProps) => {
    const getVariant=(value: number) =>{
        if(value<30){
            return'sucess';
        }else if(value<60){
            return'warning';
        }else{
            return'danger';
        }
    }
    return(
        <ProgressBar animated now={value} variant={getVariant(value)}/>
    )
}
export default DangerBar