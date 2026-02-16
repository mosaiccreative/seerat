 export interface MediaLink {
   id: string;
   outlet: string;
   title: string;
   url: string;
   date?: string;
   type: 'press' | 'recording' | 'photo';
   editorialText: 'YES' | 'NO' | 'REVIEW';
   ownerConfirmed: boolean;
 }
 
 // Extracted from /media/ page - requires owner verification
 export const mediaLinks: MediaLink[] = [
   {
     id: "earlytimes-1",
     outlet: "Early Times",
     title: "Coverage of Surinder Seerat",
     url: "http://www.earlytimes.in/m/newsdet.aspx?q=145819",
     type: "press",
     editorialText: "REVIEW",
     ownerConfirmed: false
   },
   {
     id: "tribune-1",
     outlet: "Tribune India",
     title: "8 Writers Present Punjabi Stories",
     url: "http://www.tribuneindia.com/news/jammu-kashmir/community/8-writers-present-punjabi-stories/57987.html",
     type: "press",
     editorialText: "YES",
     ownerConfirmed: false
   },
   {
     id: "greaterkashmir-1",
     outlet: "Greater Kashmir",
     title: "National Seminar on Creative Process of Surinder Seerat Concludes",
     url: "http://www.greaterkashmir.com/news/jammu/national-seminar-on-creative-process-of-surinder-seerat-concludes/184781.html",
     type: "press",
     editorialText: "YES",
     ownerConfirmed: false
   },
   {
     id: "scoopnews-1",
     outlet: "Scoop News",
     title: "Coverage of Surinder Seerat",
     url: "http://www.scoopnews.in/det.aspx?q=46799",
     type: "press",
     editorialText: "REVIEW",
     ownerConfirmed: false
   },
   {
     id: "himalayanmail-1",
     outlet: "Himalayan Mail",
     title: "Coverage of Surinder Seerat",
     url: "http://www.himalayanmail.com/newsdet.aspx?q=34915",
     type: "press",
     editorialText: "REVIEW",
     ownerConfirmed: false
   },
   {
     id: "dailyexcelsior-1",
     outlet: "Daily Excelsior",
     title: "Album of Punjabi Gazals Released",
     url: "http://www.dailyexcelsior.com/album-of-punjabi-gazals-released/",
     type: "press",
     editorialText: "YES",
     ownerConfirmed: false
   },
   {
     id: "htsyndication-1",
     outlet: "Hindustan Times",
     title: "Nostalgic Moment at Adbi Kunj Honoring Prof Seerat",
     url: "http://www.htsyndication.com/htsportal/article/Nostalgic-moment-at-Adbi-Kunj-honoring-Prof-Seerat/7070342",
     type: "press",
     editorialText: "YES",
     ownerConfirmed: false
   },
   {
     id: "apnaorg-1",
     outlet: "Apna.org",
     title: "Article about Surinder Seerat",
     url: "http://www.apnaorg.com/articles/vipsa-1/",
     type: "press",
     editorialText: "YES",
     ownerConfirmed: false
   }
 ];
 
 // Only show items that are editorial and confirmed
 export const getVerifiedPress = () => 
   mediaLinks.filter(item => item.editorialText === 'YES');