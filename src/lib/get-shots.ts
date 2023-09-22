import {cloudinary} from 'utils/cloudinary'

export const getShot = async (id: string) => {
  const shot = await cloudinary.v2.api.resource(
    `screenshots/${id}`,
    (error, result) => {
      if (error) {
        console.error(error)
      } else {
        return result
      }
    },
  )

  return shot
}
