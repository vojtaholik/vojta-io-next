import {cloudinary} from 'utils/cloudinary'

export const getShot = async (id: string) => {
  let shot
  try {
    // image
    shot = await cloudinary.v2.api.resource(
      `screenshots/${id}`,
      async (error, result) => {
        if (error) {
          console.error(error)
        } else {
          return result
        }
      },
    )
  } catch (error) {
    // video
    shot = await cloudinary.v2.api.resource(
      `screenshots/${id}`,
      {resource_type: 'video'},
      async (error, result) => {
        if (error) {
          console.error(error)
        } else {
          return result
        }
      },
    )
  }

  return shot
}

export const getShots = async (count?: number) => {
  let shots
  try {
    shots = await cloudinary.v2.search
      .expression(`folder:screenshots/*`)
      .max_results(count || 100)
      .execute()
      .then((result) => {
        return result.resources
      })
  } catch (error) {
    console.info(error)
  }

  return shots
}
