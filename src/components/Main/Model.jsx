import { Card } from "react-bootstrap"
export const Model = ({model}) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{model.make}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{model.model}</Card.Subtitle>
            <Card.Text>
            {model.class}
            </Card.Text>
            <Card.Text>Cylinders: {model.cylinders}</Card.Text>
            <Card.Text>Year: {model.year}</Card.Text>
        </Card.Body>
    </Card>
    )
}