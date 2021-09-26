//目次と内容
field_of_study = ["Linux","未定"];
field_of_study_en = ["lpic","elect"]; //url用
main_theme = [["Linuxの起動","SysVinitの仕組み","systemdの仕組み","パーティション","ライブラリ","パッケージ","シェル","アクセス権","コマンド","procディレクトリと関連知識"],["未定"]];

add_template=document.createElement("div");
add_template.innerHTML=`<h1 class="title">ゆきまるの備忘録</h1>
<nav>
  <ul id="head">
    <li class="study">
      <a href="/soliloquize/home.html"><span>まえがき</span></a>
    </li>
  </ul>
</nav>`;
document.getElementsByTagName("body")[0].prepend(add_template);

  for(i=0;i<field_of_study.length;i++)
  {
    add_node=document.createElement("li");
    add_node.className="study";
    add_node_s=document.createElement("span");
    add_node_s.textContent=field_of_study[i];
    add_node.prepend(add_node_s)
    for(j=0;j<main_theme[i].length;j++)
    {
      add_child_node=document.createElement("div");
      add_child_node.className="theme";
      add_child_node_url=document.createElement("a");
      add_child_node_url.href="/soliloquize/"+field_of_study_en[i]+"/"+field_of_study_en[i]+j+".html";
      add_child_node_url.textContent=main_theme[i][j];
      add_child_node.append(add_child_node_url);
      add_node.append(add_child_node);
    }
    console.log(add_node);
    document.getElementById("head").append(add_node);
  }


//create_head(field_of_study,main_theme)
//window.addEventListener('DOMContentLoaded', domFinished);
/*<h1 class="title">ゆきまるの備忘録</h1>
<nav>
  <ul id="head">
    <li class="study">
      <span>まえがき</span>
    </li>
    <li class="study">
      <span>LPIC</span>
      <div class="theme">
        電源
      </div>
    </li>
    <li class="study">
      <span>未定</span>
      <div class="theme">
        未定
      </div>
    </li>
  </ul>
</nav>*/