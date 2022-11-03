const getInitials = (name: string) => {
  const [firstName, lastName] = name.split(' ')
  const firstCapital = firstName[0].toUpperCase()
  const lastCapital = lastName ? lastName[0].toUpperCase() : ''

  return `${firstCapital}${lastCapital}`
}

export default getInitials
