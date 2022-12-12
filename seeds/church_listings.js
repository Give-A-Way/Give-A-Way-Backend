/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
 
  await knex('church_listings').insert([
    {church_name: "The Brooklyn Tabernacle", location: "17 Smith St Brooklyn, NY", img: "https://www.usachurches.org/images/cpics_large/thebrooklyntabernacle.jpg", phone_number: "(718) 290-2000", status: "open",request_type: "Food"},
    {church_name: "Victory Outreach Brooklyn", location: "330 59th Street Brooklyn, NY 11220", img: "https://www.usachurches.org/images/cpics_large/victory-outreach-brooklyn.jpg", phone_number: "(718) 768-3638", status: "open",request_type: "Food"},
    {church_name: "Bridge Street African Methodist Episcopal Church", location: "277 Stuyvesant Avenue Brooklyn, NY 11221", img: "https://www.usachurches.org/images/cpics_large/bridge-street-african-methodist-episcopal-church.jpg", phone_number: "(718) 452-3936", status: "open",request_type: "Food"},
    {church_name: "New Journey Church of Brooklyn", location: "480 Bainbridge Street Brooklyn, NY 11233", img: "https://www.usachurches.org/images/cpics_large/newjourneychurchofbrooklyn.jpg", phone_number: "(718) 452-0949", status: "open",request_type: "Food"},
    {church_name: "Church of God of East New York", location: "905 Sutter Avenue Brooklyn, NY 11207", img: "https://www.usachurches.org/images/cpics_large/church-of-god-of-east-new-york.jpg", phone_number: "(718) 235-7886", status: "open",request_type: "Food"},
    {church_name: "Bethel Tabernacle AME Church", location: "90 Schenectady Avenue Brooklyn, NY 11213", img: "https://www.usachurches.org/images/cpics_large/bethel-tabernacle-ame-church.jpg", phone_number: "(718) 221-8300", status: "open",request_type: "Food"},
    {church_name: "Changing Lives Christian Center", location: "1848 Linden Boulevard Brooklyn, NY 11207", img: "https://www.usachurches.org/images/cpics_large/changing-lives-christian-center.jpg", phone_number: "(718) 272-8277", status: "open",request_type: "Food"},
    {church_name: "Bethlehem Lutheran Church - Bay Ridge", location: "6999 4th Ave, Brooklyn NY 11209", img: "https://www.usachurches.org/images/cpics_large/bethlehemlutheranchurchbayridge.jpg", phone_number: "(718) 748-9502", status: "open",request_type: "Food"},
    {church_name: "Calvary Baptist Church of Red Hook", location: "773 Hicks St, Brooklyn NY 11231", img: "https://www.usachurches.org/images/cpics_large/calvary-baptist-church-of-red-hook.jpg", phone_number: "(718) 596-5054", status: "open",request_type: "Food"},
    {church_name: "St. Philip's Episcopal Church", location: "1072 80th St, Brooklyn NY 11228", img: "https://www.usachurches.org/images/cpics_large/st-philips-episcopal-church-brooklyn.jpg", phone_number: "(718) 745-2505", status: "open",request_type: "Food"},
    {church_name: "Jesus Christ Family Church", location: "915 Gates Ave, Brooklyn NY 11221", img: "https://www.usachurches.org/images/cpics_large/jesus-christ-family-church.jpg", phone_number: "(718) 452-5441", status: "open",request_type: "clothes"},
    {church_name: "Faith Deliverance Tabernacle Rhema", location: "2176 Strauss St, Brooklyn NY 11212", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZeD1sSG8QPiPj10puIqTnfKv8bSx9sMjg8g&usqp=CAU", phone_number: "(917) 385-7655", status: "open",request_type: "Food"},
    {church_name: "Mount Moriah Pentecostal Church of God, Inc.", location: "238 Rochester Ave, Brooklyn NY 11213", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6omZ2MQA29jUpgeRiJBfd6djjsIJCRfmqQ&usqp=CAU", phone_number: "(718) 493-1960", status: "open",request_type: "clothes"},
    {church_name: "Restoration Center of Hope", location: "599 Hegeman Ave, Brooklyn NY 11207", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqJIJiGvmQ-I__0dueWJ3ZRD-zuQZDtfVHg&usqp=CAU", phone_number: "(877) 997-3786", status: "open",request_type: "Food"},
    {church_name: "International Revival Tabernacle", location: "2260 Pacific St, Brooklyn NY 11233", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2J3ALuegw2KeziO9BW7FodTZ2GDoesCLo2j_DrNnl1yQJYQHXBpQUP7ZDO_cXzYujPQ&usqp=CAU", phone_number: "(718) 346-8839", status: "open",request_type: "Food"},
    {church_name: "New Covenant Worship Center, Inc.", location: "1713 Ralph Ave, Brooklyn NY 11236", img: "https://francesdechantal.org/wp-content/uploads/2018/09/001.png", phone_number: "(718) 415-7097", status: "open",request_type: "Food"},
    {church_name: "St. James Church of God Founded By Jesus Christ", location: "820 MacDonough St, Brooklyn NY 11233", img: "http://4.bp.blogspot.com/_oiNpRs137hg/TLHgBRSvtmI/AAAAAAAACZs/3g2gvhchmwc/s1600/dyker+015.JPG", phone_number: "(347) 687-3081", status: "open",request_type: "clothes"},
    {church_name: "Sovereign Grace Community Church", location: "6016 14th Ave, Brooklyn NY 11219", img: "http://eportfolios.macaulay.cuny.edu/drabik10website/files/2010/05/DSCN1271-e1273462634261.jpg", phone_number: "(718) 435-1992", status: "open",request_type: "Food"},
    {church_name: "Christ Fellowship Worship Center", location: "747 Hendrix St, Brooklyn NY 11207", img: "http://1.bp.blogspot.com/-uMwz2EL6ugM/TxqfvyiEK7I/AAAAAAAAD2c/RglSUuW_MKI/s1600/BklynAvila+001.JPG", phone_number: "(718) 346-6881", status: "open",request_type: "clothes"},
    {church_name: "United Christian Assembly Church", location: "2401 Atlantic Ave, Brooklyn NY 11233", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/78/a2/79/altar.jpg?w=500&h=-1&s=1", phone_number: "(718) 953-6900", status: "open",request_type: "Food"},
    {church_name: "Greater Bibleway Temple Apostolic Mecca", location: "261 Rochester Ave, Brooklyn NY 11213", img: "https://6tocelebrate.org/wp-content/uploads/2018/01/3-Grace-Baptist-Church-of-Christ-crop.jpg", phone_number: "(718) 774-0401", status: "open",request_type: "clothes"},

  ]);
};
