import * as React from "react";
import "./Information.css";
import SDG11 from "../img/SDG11.png"
import bikePark from "../img/bike-in-park.jpg"

const information = () => {
  //<h1 class="card-title">Card Title</h1>
  return (
    <div>

      <section className="section">
            <div className="info-container">
            <h2 className="section-heading">Why are Green Spaces Important?</h2>
              <p>
                Green spaces play an important role in promoting the health
                and well-being of individuals and communities. They provide
                a space for people to connect with nature and enjoy the outdoors.
                Access to public green spaces provide both physical and mental
                health benefits for individuals, such as reducing stress, anger,
                and aggression. In addition to the physical and mental health
                benefits, green spaces can also have social benefits. They can
                serve as a meeting place for people in the community, fostering
                a sense of community and belonging. Access to parks and natural
                areas has been shown to lessen social isolation and enhance
                relationship skills.
              </p>
        </div>
      </section>

      <section className="section">
            <div className="image-container">
              <img src={SDG11} alt="SDG 11 Sustainable Cities"/>
            </div>
            <h2 className="section-heading">Sustainable Development Goal 11.7</h2>
            <div className="text-container">
              <p>
              Sustainable Development Goal 11.7 is one of the targets set under
              Goal 11 of the United Nations' 2030 Agenda for Sustainable Development.
              Goal 11 aims to make cities and human settlements inclusive, safe,
              resilient, and sustainable. Specifically, <a href="https://www.un.org/sustainabledevelopment/cities/">SDG 11.7</a> aims 
              to, “by 2030, provide universal access to safe, inclusive and 
              accessible, green and public spaces, in particular for women and children, 
              older persons and persons with disabilities.” This includes parks, playgrounds, 
              public gardens, and other green spaces that can provide numerous benefits,
              including improving physical and mental health, promoting community
              cohesion, and mitigating the impacts of climate change. By promoting
              access to safe, inclusive, and accessible green and public spaces,
              SDG 11.7 can contribute to creating more livable and sustainable
              cities for all.
              </p>
            </div>
      </section>

      <section className="section">
            <div className="image-container">
              <img src={bikePark} alt="SDG 11 Sustainable Cities"/>
            </div>
            <h2 className="section-heading">Seattle Green Spaces</h2>
            <div className="text-container">
              <p>
              As Seattle's population continues to rise, it is crucial that the city
              remains committed to preserving and enhancing its green spaces. By doing
              so, Seattle can ensure that all of its residents can enjoy the benefits
              of its natural assets. The <a href="https://www.seattle.gov/environment/environmental-progress/trees-and-green-space">
              Office of Sustainability & Environment</a> has set
              a goal of increasing the number of Seattle households within a 10-minute
              walk of a park. In 2018, this goal was achieved for 94% of Seattle
              households, and 77% of households in urban villages were within a 5-minute
              walk of a park. The city is also working to ensure equitable access to
              parks, particularly in areas with identified gaps in walkability and
              prioritized based on equity, health, income and poverty, density, and
              opportunity. 
              </p>
              <p>
              To further increase access to parks, Seattle has dedicated three new
              parks in 2018 and has 14 more parks in development. These parks are
              being acquired in areas that will increase equitable access to parks,
              particularly in growing urban villages. To help fund the acquisition
              of new land, the <a href="https://www.seattle.gov/seattle-park-district/about">
              Seattle Park District</a> provides $2 million annually,
              which is matched one-to-one by the state. By prioritizing the
              acquisition of parkland in areas with the greatest need and leveraging
              funding from both the city and the state, Seattle can continue to
              expand access to green spaces and ensure that all residents have the
              opportunity to enjoy the benefits of these natural assets.
              </p>
            </div>
      </section>

      <section className="section">
            <h2 className="section-heading">Green Spaces Guide</h2>
            <div className="text-container">
              <p>
              There are several valuable guides available that provide information
              and resources to help create and promote the development of green spaces
              in urban areas.
              
                <li> <a href="https://www.aarp.org/content/dam/aarp/livable-communities/livable-documents/documents-2018/Parks%20Guide-LR-091018-singles.pdf">
                  "Creating Parks and Public Spaces for People of All Ages: A Step-by-Step
                  Guide"</a> is a guide that can help local leaders, policy makers,
                  community advocates, and neighborhood residents collect data, evaluate
                  opportunities, and generate ideas for increasing the quality and quantity
                  of parks and outdoor spaces across the country.</li>

                <li> <a href="https://saferoutespartnership.org/sites/default/files/resource_files/oregon_health_authority_toolkit.pdf">
                  "Connecting People to Parks: A Toolkit to Increase Safe and Equitable
                  Access to Local Parks and Green Spaces"</a> is a useful resource that provides
                  guidance for parks and recreation agencies that want to work with community
                  partners to promote local change. This toolkit is designed to help agencies
                  use the Safe Routes to Parks framework to create parks and activity-friendly
                  routes that are safe, inclusive, and equitable for all community members.
                </li>
              
              By using these guides, cities and communities can take steps to increase the
              number and quality of green spaces in urban areas. These resources provide
              valuable information and guidance that can help create safe and accessible parks
              and outdoor spaces for people of all ages, promote community engagement, and
              improve the overall health and well-being of residents.
              </p>
            </div>
      </section>

      <section className="section">
            <h2 className="section-heading">Mapping Tools</h2>
            <div className="text-container">
              <p> Mapping tools can be a powerful resource for policy makers and community
              members alike when it comes to creating public green spaces. When used in
              combination with our green spaces map, these tools can provide valuable location
              data and insights to help inform decision-making.
             
                <li> <a href="https://www.tpl.org/parkserve">
                ParkServe®</a> This platform shows park-related data for 14,000 US cities and
                  towns. Users can see the location of parks in a community, as well as
                  neighborhoods within a 10-minute walk to a park. It can also highlight areas
                  that lack access to parks altogether.
                </li>
                <li> <a href="https://www.tpl.org/parkscore">
                ParkScore®</a> This index ranks park systems in the 100 most populated US cities.
                  The total score is based on five key categories: access, investment, amenities,
                  acreage, and equity. By leveraging this information, policy makers and community
                  members can better understand how their local park system compares to others,
                  and identify areas for improvement.
                </li>
              By using these mapping tools, policy makers and community members can make more
              informed decisions when creating public green spaces, ensuring that they are both
              accessible and equitable for all.
              </p>
            </div>
      </section>

      <section className="section">
            <div className="info-container">
            <h2 className="section-heading">Healthier Cities and Mental Health</h2>
              <p>
              Spending time in green spaces has been shown to “buffer life stresses” and
              lower blood pressure by encouraging physical activity within the green spaces
              to exercise and interact with others in the community. Urban green spaces
              provide pleasant areas to relax and socialize, promoting greater levels of
              social activity and stronger neighborhood relationships. This can be particularly
              important in maintaining a high quality of life for elderly people.
              </p>
            </div>
            <div class="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/GRApAQHi7fU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
      </section>

      <section className="section">
            <h2 className="section-heading">Get Involved</h2>
            <div className="text-container">
              <p> There are numerous ways to engage with green spaces and enjoy the benefits of 
                being surrounded by nature:
                <li> One way is to plant your own garden if you have access to a backyard or balcony. 
                  This allows you to create a green space that you can tend to and enjoy in the 
                  comfort of your own home.
                </li>
                <li> Another way is to volunteer at your nearby park or nature reserve. By helping 
                  with tasks such as planting, trail maintenance, or clearing invasive species, 
                  you can give back to the community while also spending time outdoors.
                </li>
                <li> Attending local events is also an excellent way to learn more about green spaces 
                  and connect with others who share your interests. For example, the New York Restoration 
                  Project organizes tree planting ceremonies and nature walks to help residents advocate 
                  for the right to green spaces and promote restoration.
                </li>
                <li> If you're looking for a more communal experience, consider joining or creating a 
                  community garden. This allows you to work with like-minded individuals to cultivate a 
                  shared green space, while also enjoying the benefits of being surrounded by nature.
                </li>
              </p>
            </div>
      </section>

    </div>
    

)}

export default information;
