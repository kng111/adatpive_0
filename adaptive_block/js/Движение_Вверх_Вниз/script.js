// $(function() {
//     $(".block").draggable({
//       axis: "y", // Запрет перемещения по горизонтали
//       containment: "parent", // Ограничиваем перемещение блока родительским контейнером
//       cursor: "move" // Изменяем курсор при перемещении
//     });
  
//     $(".container").droppable({
//       drop: function(event, ui) {
//         $(this).append(ui.draggable.css({left:0,top:0}));
//       }
//     });
//   });
  

$(function() {
  $(".block").draggable({
    axis: "y",
    containment: "parent",
    cursor: "move",
    scroll: false,
    revert: "invalid",
    snap: ".container",
    snapMode: "inner"
  });

  $(".container").droppable({
    drop: function(event, ui) {
      var target = $(event.target);
      var droppedBlock = ui.draggable;
      var targetBlock = $(this).find('.block');

      // Находим индекс блока, на который был брошен перетаскиваемый блок
      var dropIndex = targetBlock.index(droppedBlock);

      // Находим индекс блока, который был под мышью в момент бросания
      var hoverIndex = targetBlock.index($(event.toElement).closest('.block'));

      // Если индекс блока, на который был брошен перетаскиваемый блок, равен индексу блока под мышью,
      // то блоки меняются местами
      if (dropIndex !== hoverIndex) {
        var tempBlock = targetBlock.eq(hoverIndex).detach();
        if (dropIndex < hoverIndex) {
          tempBlock.insertBefore(droppedBlock);
        } else {
          tempBlock.insertAfter(droppedBlock);
        }
      }

      droppedBlock.css({left: 0, top: 0});
    }
  });
});






