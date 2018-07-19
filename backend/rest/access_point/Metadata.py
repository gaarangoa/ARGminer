from flask_restplus import Api, Resource, fields

class Metadata():
    def __init__(self):
        pass

    def build(self, api, fields, app_link):
        ns = api.namespace(app_link, description='ARGminer API documentation')

        TODOS = {
            'todo1': {'task': 'build an API'},
            'todo2': {'task': '?????'},
            'todo3': {'task': 'profit!'},
        }

        todo_fields = api.model('Todo', {
            'task': fields.String(required=True, description='The task details')
        })

        def abort_if_todo_doesnt_exist(todo_id):
            if todo_id not in TODOS:
                api.abort(404, "Todo {} doesn't exist".format(todo_id))

        parser = api.parser()
        parser.add_argument('task', type=str, required=True, help='The task details')


        @ns.route('/<string:todo_id>')
        @api.doc(responses={404: 'Todo not found'}, params={'todo_id': 'The Todo ID'})
        class Todo(Resource):
            '''Show a single todo item and lets you delete them'''
            @api.doc(notes='todo_id should be in {0}'.format(', '.join(TODOS.keys())))
            @api.marshal_with(todo_fields)
            def get(self, todo_id):
                '''Fetch a given resource'''
                abort_if_todo_doesnt_exist(todo_id)
                return TODOS[todo_id]