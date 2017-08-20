$(function() {

  // step 1, add Report Card Ajax request
    $.ajax({
    url: 'https://www.codeschool.com/users/sfeliks2016.json',
    dataType: 'jsonp',
    success: function(response) {
      //console.log('response', response.courses.completed)
        
        addCourses(response.courses.completed);
    }
  });
    
    // step 2, Add DOM Elements
    
    function addCourses(courses) {
        
        var $badges = $('#badges');
        
        courses.forEach(function(courses) {
            
            var $course = $('<div />', {
                'class': 'course'
            }).appendTo($badges);
            
            $('<h3 />', {
              text: courses.title
            }).appendTo($course)
            
            $('<img />', {
                src: courses.badge
            }).appendTo($course);
            
            $('<a />', {
              'class': 'btn btn-primary',
              target: '_blank',
              href: courses.url,
              text: 'See Course'
            }).appendTo($course);
            
        })
        
    }

});
