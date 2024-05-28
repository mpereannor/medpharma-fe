export function convertToEmail(name: string) {
  const lowerCaseName = name.toLowerCase()

  const [firstName, lastName] = lowerCaseName.split(" ")

  const email = `${firstName}@${lastName}.com`

  return email
}
