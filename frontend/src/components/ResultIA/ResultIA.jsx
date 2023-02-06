import React, {useState} from "react"
import Tweet from "../TweetMore/Tweet"

function ResultIA({ data }) {
    const [percentageTotal, setTimeline] = useState(data.timelineUser.totalPercentage)
    const [tweetMore, setTweetMore] = useState(data.timelineUser.tweetMore)

    return (
        <div className="self-center">
            <div className="relative">
                <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

                    <div className="relative">
                        <div className="flex">
                            <img className='rounded-full w-20 h-20' src={data.profileURL} alt="timeline" />
                            <p>{data.username}</p>
                        </div>
                    </div>
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Características
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Porcentage
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Positivo
                                    </th>
                                    <td class="px-6 py-4">
                                        {percentageTotal.Positivo * 10}%
                                    </td>

                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Toxico
                                    </th>
                                    <td class="px-6 py-4">
                                        {percentageTotal.Toxico * 10}%
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Developer
                                    </th>
                                    <td class="px-6 py-4">
                                        {percentageTotal.Developer * 10}%
                                    </td>

                                </tr>
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Gamer
                                    </th>
                                    <td class="px-6 py-4">
                                        {percentageTotal.Gamer * 10}%
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Tweet 
                        tweet={tweetMore}
                    /> 
                </div>
            </div>
        </div>
    )
}

export default ResultIA