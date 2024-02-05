import { CardData } from "../App"

interface BusinessCardProps {
    cardInfo: CardData
}

export default function BusinessCard({ cardInfo }: BusinessCardProps) {
    const k = ['Company', 'Team', 'Name', 'Phone', 'Email']
    const v = Object.values(cardInfo)
    return (
        <div className="businessCard">
            <div className="businessCardItem keys">
                <span>{k[0]}</span>
                <span>{k[1]}</span>
                <span>{k[2]}</span>
                <span>{k[3]}</span>
                <span>{k[4]}</span>
            </div>
            <div className="businessCardItem values">
                <span>{v[0]}</span>
                <span>{v[1]}</span>
                <span>{v[2]}</span>
                <span>{v[3]}</span>
                <span>{v[4]}</span>
            </div>
        </div>
    )
}