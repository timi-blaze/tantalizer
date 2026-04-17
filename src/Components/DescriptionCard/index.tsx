

interface DescriptionCardProps {
    image : string
    text1 : string
    text2: string

}

const DescriptionCard = ({ image, text1, text2}: DescriptionCardProps) => {
  return (
    <div className="description-card">
        
        <div className="desscription-icon">
            <img src={image} alt={text1}/>
        </div>

        <p className="description-text">
            {text1} <br />
            {text2}
        </p>
        
        </div>
  )
}

export default DescriptionCard