export const categories=["Turmeric Powder (Haldi)","Red Chilli Powder","Coriander Powder","Cumin Powder","Garam Masala","Kitchen King Masala","Chole Masala","Pav Bhaji Masala","Biryani Masala","Chicken Masala","Meat Masala","Sabzi Masala","Sambar Masala","Rasam Powder","Chaat Masala","Tea Masala","Paneer Masala","Fish Masala","Achar Masala","Shahi Paneer Masala"];
const imageUrl=(id:string)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&h=560&q=85`;
export const categoryImages:Record<string,string>={
  "Turmeric Powder (Haldi)":imageUrl("photo-1615485500704-8e990f9900f7"),
  "Red Chilli Powder":imageUrl("photo-1583619898371-881b07f8b3b1"),
  "Coriander Powder":imageUrl("photo-1506368249639-73a05d6f6488"),
  "Cumin Powder":imageUrl("photo-1596040033229-a9821ebd058d"),
  "Garam Masala":imageUrl("photo-1532336414038-cf19250c5757"),
  "Kitchen King Masala":imageUrl("photo-1596040033229-a9821ebd058d"),
  "Chole Masala":imageUrl("photo-1506368249639-73a05d6f6488"),
  "Pav Bhaji Masala":imageUrl("photo-1604908176997-125f25cc6f3d"),
  "Biryani Masala":imageUrl("photo-1563379091339-03246963d96a"),
  "Chicken Masala":imageUrl("photo-1601050690597-df0568f70950"),
  "Meat Masala":imageUrl("photo-1544025162-d76694265947"),
  "Sabzi Masala":imageUrl("photo-1512621776951-a57141f2eefd"),
  "Sambar Masala":imageUrl("photo-1505253716362-afaea1d3d1af"),
  "Rasam Powder":imageUrl("photo-1547592180-85f173990554"),
  "Chaat Masala":imageUrl("photo-1606491956689-2ea866880c84"),
  "Tea Masala":imageUrl("photo-1571934811356-5cc061b6821f"),
  "Paneer Masala":imageUrl("photo-1631452180519-c014fe946bc7"),
  "Fish Masala":imageUrl("photo-1615141982883-c7ad0e69fd62"),
  "Achar Masala":imageUrl("photo-1596040033229-a9821ebd058d"),
  "Shahi Paneer Masala":imageUrl("photo-1631452180519-c014fe946bc7")
};
export const products=categories.slice(0,12).map((name,i)=>({id:i+1,name,description:`Freshly ground ${name.toLowerCase()} made from selected Indian ingredients.`,price:[89,119,139,159][i%4],discount:[8,12,15,20][i%4],stock:40+i*7,rating:4.5+(i%5)/10,reviews:56+i*13,image:categoryImages[name],category:name,bestSeller:i%3===0,newest:i%4===0}));
export const faqs=Array.from({length:20},(_,i)=>({q:[`Are House Of Spices spices freshly ground?`,`Do you deliver across India?`,`Are your spices preservative free?`,`How do I track my order?`][i%4],a:[`Yes, batches are ground in small lots and packed for aroma retention.`,`Yes, serviceability is checked by PIN code during checkout.`,`Core spice powders are made without artificial colors or preservatives.`,`Use Track Order with your order number and registered phone.`][i%4]}));
export const branches=["Delhi","Mumbai","Bengaluru","Jaipur","Kolkata","Hyderabad"].map((city,i)=>({city,address:`House Of Spices Store ${i+1}, ${city} Spice Market`,phone:`+91 90000 10${i}10${i}`,hours:"10 AM - 9 PM",map:`https://maps.google.com/?q=${city}%20House%20Of%20Spices`}));
