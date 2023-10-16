const edit1 = document.getElementById("header");
edit1.addEventListener("mouseover",function(){
    edit1.style.background = "red";
    });
    edit1.addEventListener("mouseout",function(){
        edit1.style.background = "#91D18B";
        });
const edit2 = document.getElementById("nav");
edit2.addEventListener("mouseover",function(){
    edit2.style.background = "blue";
    });
    edit2.addEventListener("mouseout",function(){
        edit2.style.background = "#6EBFB5";
        });

        const edit3 = document.getElementById("cel1")
 edit3.addEventListener("mouseover",function(){
 edit3.style.background = "#D6CC99";
    });
  edit3.addEventListener("mouseout",function(){
      edit3.style.background = "#8BCDCD";
    });

 const edit4 = document.getElementById("left1")
    edit4.addEventListener("mouseover",function(){
      edit4.style.background = "#E9B824";
          });
      edit4.addEventListener("mouseout",function(){
        edit4.style.background = "#01676B";
      });

      const edit5 = document.getElementById("left2")
    edit5.addEventListener("mouseover",function(){
      edit5.style.background = "#E9B824";
          });
      edit5.addEventListener("mouseout",function(){
        edit5.style.background = "#01676B";
      });

      const edit6 = document.getElementById("left3")
    edit6.addEventListener("mouseover",function(){
      edit6.style.background = "#E9B824";
          });
      edit6.addEventListener("mouseout",function(){
        edit6.style.background = "#01676B";
      });

      const edit7 = document.getElementById("cel2")
    edit7.addEventListener("mouseover",function(){
      edit7.style.background = "#FF6969";
          });
      edit7.addEventListener("mouseout",function(){
        edit7.style.background = "#565D47";
      });

      const edit8 = document.getElementById("center1")
      edit8.addEventListener("mouseover",function(){
        edit8.style.background = "purple";
            });
        edit8.addEventListener("mouseout",function(){
          edit8.style.background = "#50BDA1";
        });

        const edit9 = document.getElementById("center2")
      edit9.addEventListener("mouseover",function(){
        edit9.style.background = "purple";
            });
        edit9.addEventListener("mouseout",function(){
          edit9.style.background = "#50BDA1";
        });

        const edit10 = document.getElementById("center3")
      edit10.addEventListener("mouseover",function(){
        edit10.style.background = "purple";
            });
        edit10.addEventListener("mouseout",function(){
          edit10.style.background = "#50BDA1";
        });

        const edit11 = document.getElementById("cel3")
      edit11.addEventListener("mouseover",function(){
        edit11.style.background = "#00005C";
            });
        edit11.addEventListener("mouseout",function(){
          edit11.style.background = "#71A95A";
        });

        const edit12 = document.getElementById("right1")
      edit12.addEventListener("mouseover",function(){
        edit12.style.background = "#98EECC";
            });
        edit12.addEventListener("mouseout",function(){
          edit12.style.background = "#7F78D2";
        });

        const edit13 = document.getElementById("right2")
      edit13.addEventListener("mouseover",function(){
        edit13.style.background = "#98EECC";
            });
        edit13.addEventListener("mouseout",function(){
          edit13.style.background = "#7F78D2";
        });

        const edit14 = document.getElementById("Footer")
      edit14.addEventListener("mouseover",function(){
        edit14.style.background = "black";
            });
        edit14.addEventListener("mouseout",function(){
          edit14.style.background = "rgb(14, 191, 197)";
        });

        const edit15 = document.getElementById("Footer1")
        edit15.addEventListener("mouseover",function(){
          edit15.style.background = "#D36B00";
              });
          edit15.addEventListener("mouseout",function(){
            edit15.style.background = "#137083";
          });
  
          const edit16 = document.getElementById("Footer2")
        edit16.addEventListener("mouseover",function(){
          edit16.style.background = "#D36B00";
              });
          edit16.addEventListener("mouseout",function(){
            edit16.style.background = "#50BDA1";
          });
  


var button = document.getElementById("bt")
button.addEventListener("click",function(){
    var warna = document.getElementById("in").value;
    let li = document.getElementsByTagName("li");
    for (let i=0; i<li.length; i++) {
        if(i%2==1){
            li[i].style.backgroundColor = warna;
            li[i].style.Color = warna;
        }

 }
});