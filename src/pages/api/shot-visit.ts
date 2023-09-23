import {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    try {
      // Extract publicId from the request body.
      const {publicId} = req.body

      // Implement your logic to increment the page visit count for the given publicId.
      // This can involve reading/writing to a JSON file, a database, or any other storage method.

      // For simplicity, let's assume you have a JSON file named "pageVisits.json" in your project root.
      // Read the current visit count.
      const fs = require('fs')
      const path = require('path')
      const filePath = path.join(process.cwd(), 'public', 'shotVisits.json')
      const rawData = fs.readFileSync(filePath)
      const shotVisits = JSON.parse(rawData)

      // Increment the visit count for the specified publicId.
      if (!shotVisits[publicId]) {
        shotVisits[publicId] = 1
      } else {
        shotVisits[publicId]++
      }

      // Save the updated data back to the file.
      fs.writeFileSync(filePath, JSON.stringify(shotVisits))

      // Respond with a success message.
      res.status(200).json({message: 'Shot visit incremented successfully'})
    } catch (error) {
      // Handle any errors that occur during the process.
      console.error(error)
      res.status(500).json({message: 'Internal server error'})
    }
  } else {
    res.status(405).json({message: 'Method not allowed'})
  }
}
