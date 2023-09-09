export default function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose } = props;
   return (
      <div>
         <button>X</button>
         
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.specie}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt='' />
         
      </div>
   );
}
