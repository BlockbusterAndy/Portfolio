
const IconCard = ({ url, name }) => {
  return (
    <div className='flex items-center gap-2 bg-white/5 border border-white/5 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors cursor-default'>
      <img src={url} alt={name} className="w-5 h-5 object-contain" loading="lazy" />
      <span className='text-secondaryText font-medium text-sm'>{name}</span>
    </div>
  )
}

export default IconCard