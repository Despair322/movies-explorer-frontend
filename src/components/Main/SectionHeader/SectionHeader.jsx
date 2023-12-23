import './SectionHeader.css'

export default function SectionHeader({ title }) {
    return (
        <div className='section-header'>
            <h2 className="section-header__title">{title}</h2>
            <span className="section-header__line"></span>
        </div>
    )
}
