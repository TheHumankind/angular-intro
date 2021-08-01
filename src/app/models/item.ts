export interface Item {
    kind: string,
    etag: string,
    id: string,
    snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
          default: {
            url: string,
            width: number,
            height: number
          },
          medium: {
            url: string,
            width: number,
            height: number,
          },
          high: {
            url: string,
            width: number,
            height: number
          },
          standard: {
            url: string,
            width: number,
            height: number
          },
          maxres: {
            url: string,
            width: number,
            height: number
          }
        },  
    },
    channeralTitle: string,
    tags: string[],
    categoryId: string,
    liveBroadcastContent: string,
    localized: {
        title: string,
        descr: string,
    },
    defaultAudioLang: string,
    stat: {
        viewCount: number,
        likeCount: number,
        dislikeCount: number,
        favoriteCount: number,
        commentCount: number
    }
}
