import AccordionProps from '../../interfaces/component-interface';

export default function Accordion({ title, content }: AccordionProps) {
  return (
    <>
      <div className='accordion-title-container'>
        <h1>{title}</h1>
      </div>
    </>
  )
}